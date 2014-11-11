-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 11, 2014 at 04:11 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `feedback_en`
--
CREATE DATABASE IF NOT EXISTS `feedback_en` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `feedback_en`;

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE IF NOT EXISTS `branch` (
  `id` varchar(128) NOT NULL,
  `address` text NOT NULL,
  `time` int(11) NOT NULL,
  `phone` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `address`, `time`, `phone`) VALUES
('dbs_angmokio', '53 Ang Mo Kio Avenue 3 #03-01/27 AMK Hub', 0, '1800 111 1111'),
('dbs_bedok', 'Blk 210 New Upper Changi Road #01-707', 0, '1800 111 1111'),
('dbs_bishan', '9 Bishan Place #01-14 Junction 8 Shopping Centre', 0, '1800 111 1111'),
('dbs_clementi', 'Blk 450 Clementi Avenue 3 #01-293/295', 0, '1800 111 1111');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `thread_id` int(11) NOT NULL,
  `cat` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thread_id` int(11) NOT NULL,
  `user_id` text NOT NULL,
  `text` text CHARACTER SET utf8 NOT NULL,
  `time` datetime NOT NULL,
  `up` int(11) NOT NULL,
  `down` int(11) NOT NULL,
  `spam_status` int(11) NOT NULL,
  `spam_count` int(11) NOT NULL,
  `replies` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `comment_down`
--

CREATE TABLE IF NOT EXISTS `comment_down` (
  `comment_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comment_image`
--

CREATE TABLE IF NOT EXISTS `comment_image` (
  `comment_id` int(11) NOT NULL,
  `image_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comment_spam_reporter`
--

CREATE TABLE IF NOT EXISTS `comment_spam_reporter` (
  `comment_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comment_up`
--

CREATE TABLE IF NOT EXISTS `comment_up` (
  `comment_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE IF NOT EXISTS `company` (
  `id` varchar(32) NOT NULL,
  `name` text NOT NULL,
  `image` text NOT NULL,
  `info` text NOT NULL,
  `address` text NOT NULL,
  `description` text NOT NULL,
  `time` text NOT NULL,
  `phone` int(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `image`, `info`, `address`, `description`, `time`, `phone`) VALUES
('airline_jetstar', 'Jetstar Airways', 'jetstar.jpg', '', '', '', '', 0),
('airline_scoot', 'Scoot', 'scoot.jpg', '', '', '', '', 0),
('airline_singaporeairline', 'Singapore Airline', 'singapore_airline.jpg', '', '', '', '', 0),
('airline_tiger', 'Tiger Airways', 'tigerair.jpg', '', '', '', '', 0),
('bank_citibank', 'Citibank', 'citibank.jpg', '', '', '', '', 0),
('bank_dbs', 'DBS', 'dbs.jpg', '', '', '', '', 0),
('bank_hsbc', 'HSBC', 'hsbc.jpg', '', '', '', '', 0),
('bank_ocbc', 'OCBC', 'ocbc.jpg', '', '', '', '', 0),
('bank_standardchartered', 'Standard Chartered', 'standard_chartered.jpg', '', '', '', '', 0),
('bank_uob', 'UOB', 'uob.jpg', '', '', '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `com_branch`
--

CREATE TABLE IF NOT EXISTS `com_branch` (
  `company` text NOT NULL,
  `branch` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `com_branch`
--

INSERT INTO `com_branch` (`company`, `branch`) VALUES
('bank_dbs', 'dbs_bedok'),
('bank_dbs', 'dbs_bishan'),
('bank_dbs', 'dbs_clementi'),
('bank_dbs', 'dbs_angmokio');

-- --------------------------------------------------------

--
-- Table structure for table `field`
--

CREATE TABLE IF NOT EXISTS `field` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `field`
--

INSERT INTO `field` (`id`, `name`) VALUES
(1, 'Service'),
(2, 'Product');

-- --------------------------------------------------------

--
-- Table structure for table `industry`
--

CREATE TABLE IF NOT EXISTS `industry` (
  `id` text NOT NULL,
  `name` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `industry`
--

INSERT INTO `industry` (`id`, `name`, `image`) VALUES
('bank', 'Bank', 'dbs.jpg'),
('airline', 'Airline', 'tiger.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `ind_com`
--

CREATE TABLE IF NOT EXISTS `ind_com` (
  `industry` text NOT NULL,
  `company` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ind_com`
--

INSERT INTO `ind_com` (`industry`, `company`) VALUES
('bank', 'bank_dbs'),
('bank', 'bank_hsbc'),
('bank', 'bank_ocbc'),
('bank', 'bank_standardchartered'),
('bank', 'bank_citibank'),
('bank', 'bank_uob'),
('airline', 'airline_jetstar'),
('airline', 'airline_scoot'),
('airline', 'airline_singaporeairline'),
('airline', 'airline_tiger');

-- --------------------------------------------------------

--
-- Table structure for table `reply`
--

CREATE TABLE IF NOT EXISTS `reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `text` text CHARACTER SET utf8 NOT NULL,
  `time` datetime NOT NULL,
  `up` int(11) NOT NULL,
  `down` int(11) NOT NULL,
  `spam_status` int(11) NOT NULL,
  `spam_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `reply_down`
--

CREATE TABLE IF NOT EXISTS `reply_down` (
  `reply_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reply_image`
--

CREATE TABLE IF NOT EXISTS `reply_image` (
  `reply_id` int(11) NOT NULL,
  `image_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reply_spam_reporter`
--

CREATE TABLE IF NOT EXISTS `reply_spam_reporter` (
  `reply_id` int(11) NOT NULL,
  `fb_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reply_up`
--

CREATE TABLE IF NOT EXISTS `reply_up` (
  `reply_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thread`
--

CREATE TABLE IF NOT EXISTS `thread` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `branch_id` varchar(64) NOT NULL,
  `user_id` varchar(128) NOT NULL,
  `solved` int(1) NOT NULL,
  `time` datetime NOT NULL,
  `rate` int(11) NOT NULL,
  `up` int(11) NOT NULL,
  `down` int(11) NOT NULL,
  `spam_status` int(1) NOT NULL,
  `spam_count` int(11) NOT NULL,
  `text` text CHARACTER SET utf8 NOT NULL,
  `comments` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `thread_down`
--

CREATE TABLE IF NOT EXISTS `thread_down` (
  `thread_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thread_image`
--

CREATE TABLE IF NOT EXISTS `thread_image` (
  `thread_id` int(11) NOT NULL,
  `image_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thread_spam_reporter`
--

CREATE TABLE IF NOT EXISTS `thread_spam_reporter` (
  `thread_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thread_up`
--

CREATE TABLE IF NOT EXISTS `thread_up` (
  `thread_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8 NOT NULL,
  `photo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `photo`) VALUES
(1, 'Tran Doan Khanh Vu', 'user/user1.jpg'),
(2, 'Nguyen Duy Long', 'user/user2.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
