-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2014 at 03:19 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `feedback`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE IF NOT EXISTS `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `like` int(11) NOT NULL,
  `dislike` int(11) NOT NULL,
  `star` int(11) NOT NULL,
  `view` int(11) NOT NULL,
  `info` text,
  `industry` int(11) NOT NULL,
  `address` text,
  `image` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `like`, `dislike`, `star`, `view`, `info`, `industry`, `address`, `image`) VALUES
(1, 'Mai Linh Taxi', 2384, 459, 4, 37282, 'We are the best taxi service in Vietnam', 1, 'TpHCM', ''),
(2, 'Vinasun', 1367, 237, 4, 27181, 'Vinasun is one of the most important taxi services in Vietnam', 1, 'Hanoi', ''),
(3, 'Petrolimex', 3714, 421, 5, 42142, 'Taxi Petrolimex is the best in Vietnam', 1, 'Danang, Hanoi', ''),
(4, 'Cho Ray', 3234, 513, 4, 34214, 'Best Hospital in Southern of Vietnam', 4, 'TpHCM', ''),
(5, 'Nhan Dan Gia Dinh', 2321, 932, 3, 34224, 'Best Hospital Service for everyone!', 4, 'Saigon', ''),
(6, 'Thong Nhat', 1231, 214, 5, 32153, 'Good Location for people at Tan Binh District HCMC', 4, 'Saigon', ''),
(7, 'Saigontourist', 2125, 5532, 1, 342321, 'We are the top service Taxi in Vietnam. Join us!', 1, 'Hanoi', ''),
(8, '115', 2241, 332, 2, 32142, 'Affordable Hospital for everybody!', 4, 'Tan Binh, Vietnam', '');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company` int(11) NOT NULL,
  `star` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `dislikes` int(11) NOT NULL,
  `solved` int(11) NOT NULL,
  `tags` text NOT NULL,
  `parent` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `field`
--

CREATE TABLE IF NOT EXISTS `field` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `field`
--

INSERT INTO `field` (`id`, `name`) VALUES
(1, 'Service'),
(2, 'Parking'),
(3, 'Product');

-- --------------------------------------------------------

--
-- Table structure for table `industry`
--

CREATE TABLE IF NOT EXISTS `industry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `industry`
--

INSERT INTO `industry` (`id`, `name`) VALUES
(1, 'Taxi'),
(2, 'Bank'),
(3, 'Car Park'),
(4, 'Hospital'),
(5, 'Motobike Repair'),
(6, 'Telcom'),
(7, 'Air Ticket Retailer');

-- --------------------------------------------------------

--
-- Table structure for table `rank_company`
--

CREATE TABLE IF NOT EXISTS `rank_company` (
  `industry` int(11) NOT NULL,
  `rank` int(11) NOT NULL,
  `company` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rank_company`
--

INSERT INTO `rank_company` (`industry`, `rank`, `company`) VALUES
(1, 1, 3),
(1, 1, 1),
(1, 1, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
