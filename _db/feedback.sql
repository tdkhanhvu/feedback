-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 23, 2014 at 11:01 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `feedback`
--
CREATE DATABASE IF NOT EXISTS `feedback` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `feedback`;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `address`, `time`, `phone`) VALUES
('kfc_1', 'A43 Truong Son – Phuong 4 – Quan Tân Bình – Tp.HCM', 0, '91234291'),
('kfc_2', 'L?u 4 – DiamondPlaza 34 Lê Du?n – Ph??ng B?n Nghé – Qu?n 1- Tp.HCM', 0, '0'),
('kfc_3', 'Siêu th? Sài Gòn – s? 34 ???ng 3/2 – Ph??ng 12 – Qu?n 10 – Tp.HCM', 0, '0'),
('kfc_4', '15-17 C?ng Hòa – Ph??ng 4 – Qu?n Tân Bình – Tp.HCM', 0, '0'),
('kfc_5', '20 An D??ng V??ng – Ph??ng 9 – Qu?n 5 – Tp.HCM', 0, '0'),
('kfc_6', '74/2 Hai Bà Tr?ng – Ph??ng B?n Nghé – Qu?n 1- Tp.HCM', 0, '0'),
('kfc_7', '80 ???ng Tháp M??i – Ph??ng 2 – Qu?n 6 – Tp.HCM', 0, '0'),
('kfc_8', 'Co.op Mart – 571 Nguy?n Ki?m – Ph??ng 9 – Qu?n Phú Nhu?n – Tp.HCM', 0, '0');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `thread_id` int(11) NOT NULL,
  `cat` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`thread_id`, `cat`, `name`) VALUES
(1, 1, 'Phuc Vu'),
(1, 2, 'Giu Xe'),
(2, 3, 'San Pham'),
(4, 1, 'Phuc Vu'),
(4, 2, 'Giu Xe'),
(5, 1, 'Phuc Vu'),
(5, 2, 'Giu Xe'),
(6, 1, 'Phuc Vu'),
(6, 2, 'Giu Xe'),
(7, 1, 'Phuc Vu'),
(7, 2, 'Giu Xe'),
(8, 1, 'Phuc Vu');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thread_id` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `text` text NOT NULL,
  `time` datetime NOT NULL,
  `up` int(11) NOT NULL,
  `down` int(11) NOT NULL,
  `spam_status` int(11) NOT NULL,
  `spam_count` int(11) NOT NULL,
  `replies` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `thread_id`, `user_id`, `text`, `time`, `up`, `down`, `spam_status`, `spam_count`, `replies`) VALUES
(1, 1, 10153585547158306, 'comment một', '2014-09-01 00:00:00', 0, 0, 0, 1, 11),
(2, 1, 10153585547158306, 'comment hai', '2014-09-02 00:00:00', 0, 0, 0, 0, 0),
(3, 1, 10153585547158306, 'ba', '2014-09-03 00:00:00', 0, 0, 0, 0, 0),
(4, 1, 10153585547158306, 'bốn', '0000-00-00 00:00:00', 0, 0, 0, 0, 0),
(5, 1, 10153585547158306, 'năm', '2014-09-05 00:00:00', 0, 0, 0, 0, 0),
(6, 1, 10153585547158306, 'sáu', '2014-09-06 00:00:00', 0, 0, 0, 0, 0),
(7, 1, 10153585547158306, 'bảy', '2014-09-07 00:00:00', 0, 0, 0, 0, 0),
(8, 1, 10153585547158306, 'tám', '2014-09-08 00:00:00', 0, 0, 0, 0, 0),
(9, 1, 10153585547158306, 'chín', '2014-09-09 00:00:00', 0, 0, 0, 0, 0),
(10, 1, 10153585547158306, 'mười', '2014-09-10 00:00:00', 0, 0, 0, 0, 0),
(11, 1, 10153585547158306, 'mười một', '2014-09-11 00:00:00', 0, 0, 0, 0, 0),
(12, 7, 10153585547158306, 'xxx', '2014-10-08 20:06:53', 0, 0, 1, 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `comment_down`
--

CREATE TABLE IF NOT EXISTS `comment_down` (
  `comment_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment_down`
--

INSERT INTO `comment_down` (`comment_id`, `fb_id`) VALUES
(12, 2);

-- --------------------------------------------------------

--
-- Table structure for table `comment_image`
--

CREATE TABLE IF NOT EXISTS `comment_image` (
  `comment_id` int(11) NOT NULL,
  `image_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment_image`
--

INSERT INTO `comment_image` (`comment_id`, `image_name`) VALUES
(12, 'aaa'),
(12, 'bbb');

-- --------------------------------------------------------

--
-- Table structure for table `comment_spam_reporter`
--

CREATE TABLE IF NOT EXISTS `comment_spam_reporter` (
  `comment_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment_spam_reporter`
--

INSERT INTO `comment_spam_reporter` (`comment_id`, `fb_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `comment_up`
--

CREATE TABLE IF NOT EXISTS `comment_up` (
  `comment_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `phone` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `image`, `info`, `address`, `description`, `time`, `phone`) VALUES
('cine_cinebox', 'Cinebox Cinema', 'cinebox_cinema.jpg', '', '', '', '', '0'),
('cine_galaxy', 'Cinema Galaxy', 'galaxy_cinema.jpg', '', '', '', '', '0'),
('cine_lotte', 'Cinema Lotteria', 'lotte_cinema.jpg', '', '', '', '', '0'),
('cine_megastar', 'Cinema Megastar', 'megastar_cinema.jpg', '', '', '', '', '0'),
('ff_burgerking', 'Burger King', 'burgerking.jpg', '', '', '', '', '0'),
('ff_jollibee', 'Jollibee', 'jollibee.jpg', '', '', '', '', '0'),
('ff_kfc', 'KFC', 'kfc.jpg', 'kfc_logo.png', 'A43 Trường Sơn – Phường 4 – Quận Tân Bình – Tp.HCM', 'Bên cạnh những món ăn truyền thống như gà rán và Bơ-gơ, đến với thị trường Việt Nam, KFC đã chế biến thêm một số món để phục vụ những thức ăn hợp khẩu vị người Việt như: Gà Big‘n Juicy, Gà Giòn Không Xương, Cơm Gà KFC, Bắp Cải Trộn … Một số món mới cũng đã được phát triển và giới thiệu tại thị trường Việt Nam, góp phần làm tăng thêm sự đa dạng trong danh mục thực đơn, như: Bơ-gơ Tôm, Lipton, Bánh Egg Tart.', '7h30-11h00 & 13h00-16h00 các ngày trong tuần', '123456789'),
('ff_lotte', 'Lotteria', 'lotteria.jpg', '', '', '', '', '0'),
('ff_mcdonald', 'Mc Donald''s', 'mcdonald.jpg', '', '', '', '', '0'),
('ff_pizzahut', 'Pizza Hut', 'pizzahut.jpg', '', '', '', '', '0'),
('gas_benthanh', 'Ben Thanh', 'ben_thanh.jpg', '', '', '', '', '0'),
('gas_dbp', 'Dien Bien Phu', 'dien_bien_phu.jpg', '', '', '', '', '0'),
('gas_notranglong', 'No Trang Long', 'no_trang_long.jpg', '', '', '', '', '0'),
('gas_ntp', 'Nguyen Tri Phuong', 'nguyen_tri_phuong.jpg', '', '', '', '', '0'),
('mall_aeon', 'Aeon Mall', 'aeon_mall.jpg', '', '', '', '', '0'),
('mall_diamond', 'Diamond Plaza Mall', 'diamond_plaza.jpg', '', '', '', '', '0'),
('mall_nowzone', 'Now Zone', 'nowzone.jpg', '', '', '', '', '0'),
('mall_parkson', 'Parkson', 'parkson.jpg', '', '', '', '', '0'),
('mall_vincom', 'Vincom', 'vincom.jpg', '', '', '', '', '0'),
('mart_bigc', 'Big C', 'bigC.jpg', '', '', '', '', '0'),
('mart_coopmart', 'Coop Mart', 'coopmart.jpg', '', '', '', '', '0'),
('mart_lotte', 'Lotte Mart', 'lottemart.jpg', '', '', '', '', '0'),
('mart_maximark', 'Maximark', 'maximark.jpg', '', '', '', '', '0'),
('taxi_daukhicuulong', 'Dau Khi Cuu Long', 'dau_khi_cuu_long.jpg', '', '', '', '', '0'),
('taxi_hoanglong', 'Hoang Long', 'hoang_long.jpg', '', '', '', '', '0'),
('taxi_mailinh', 'Mai Linh', 'mai_linh.jpg', '', '', '', '', '0'),
('taxi_phuongtrang', 'Phuong Trang', 'phuong_trang.jpg', '', '', '', '', '0'),
('taxi_saigonair', 'Saigon Air', 'saigonair.jpg', '', '', '', '', '0'),
('taxi_saigontourist', 'Saigontourist', 'saigontourist.jpg', '', '', '', '', '0'),
('taxi_vinasun', 'Vinasun', 'vinasun.jpg', '', '', '', '', '0'),
('taxi_vinataxi', 'Vina Taxi', 'vinataxi.jpg', '', '', '', '', '0'),
('telco_beeline', 'Beeline', 'beeline.jpg', '', '', '', '', '0'),
('telco_mobifone', 'Mobifone', 'mobifone.jpg', '', '', '', '', '0'),
('telco_viettel', 'Viettel', 'viettel.jpg', '', '', '', '', '0'),
('telco_vinaphone', 'Vinaphone', 'vinaphone.jpg', '', '', '', '', '0');

-- --------------------------------------------------------

--
-- Table structure for table `com_branch`
--

CREATE TABLE IF NOT EXISTS `com_branch` (
  `company` text NOT NULL,
  `branch` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `com_branch`
--

INSERT INTO `com_branch` (`company`, `branch`) VALUES
('ff_kfc', 'kfc_1'),
('ff_kfc', 'kfc_2'),
('ff_kfc', 'kfc_3'),
('ff_kfc', 'kfc_4'),
('ff_kfc', 'kfc_6'),
('ff_kfc', 'kfc_7'),
('ff_kfc', 'kfc_8'),
('ff_kfc', 'kfc_5');

-- --------------------------------------------------------

--
-- Table structure for table `field`
--

CREATE TABLE IF NOT EXISTS `field` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

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
  `id` text NOT NULL,
  `name` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `industry`
--

INSERT INTO `industry` (`id`, `name`, `image`) VALUES
('fastfood', 'Thuc An Nhanh', 'pizzahut.jpg'),
('taxi', 'Taxi', 'mai_linh.jpg'),
('cinema', 'Cinema Movie', 'cinebox_cinema.jpg'),
('telco', 'Vien Thong', 'beeline.jpg'),
('supermarket', 'Sieu Thi', 'lottemart.jpg'),
('mall', 'Trung Tam Mua Sam', 'diamond_plaza.jpg'),
('gas', 'Cay Xang', 'nguyen_tri_phuong.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `ind_com`
--

CREATE TABLE IF NOT EXISTS `ind_com` (
  `industry` text NOT NULL,
  `company` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ind_com`
--

INSERT INTO `ind_com` (`industry`, `company`) VALUES
('cinema', 'cine_cinebox'),
('cinema', 'cine_galaxy'),
('cinema', 'cine_lotte'),
('cinema', 'cine_megastar'),
('fastfood', 'ff_burgerking'),
('fastfood', 'ff_jollibee'),
('fastfood', 'ff_kfc'),
('fastfood', 'ff_lotte'),
('fastfood', 'ff_mcdonald'),
('fastfood', 'ff_pizzahut'),
('gas', 'gas_benthanh'),
('gas', 'gas_dbp'),
('gas', 'gas_notranglong'),
('gas', 'gas_ntp'),
('mall', 'mall_aeon'),
('mall', 'mall_diamond'),
('mall', 'mall_nowzone'),
('mall', 'mall_parkson'),
('mall', 'mall_vincom'),
('supermarket', 'mart_bigc'),
('supermarket', 'mart_coopmart'),
('supermarket', 'mart_lotte'),
('supermarket', 'mart_maximark'),
('taxi', 'taxi_daukhicuulong'),
('taxi', 'taxi_hoanglong'),
('taxi', 'taxi_mailinh'),
('taxi', 'taxi_phuongtrang'),
('taxi', 'taxi_saigonair'),
('taxi', 'taxi_saigontourist'),
('taxi', 'taxi_vinasun'),
('taxi', 'taxi_vinataxi'),
('telco', 'telco_beeline'),
('telco', 'telco_mobifone'),
('telco', 'telco_viettel'),
('telco', 'telco_vinaphone');

-- --------------------------------------------------------

--
-- Table structure for table `reply`
--

CREATE TABLE IF NOT EXISTS `reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `text` text NOT NULL,
  `time` datetime NOT NULL,
  `up` int(11) NOT NULL,
  `down` int(11) NOT NULL,
  `spam_status` int(11) NOT NULL,
  `spam_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `reply`
--

INSERT INTO `reply` (`id`, `comment_id`, `user_id`, `text`, `time`, `up`, `down`, `spam_status`, `spam_count`) VALUES
(1, 1, 10153585547158306, 'một', '2014-09-01 00:00:00', 0, 0, 0, 0),
(2, 1, 10153585547158306, 'hai', '2014-09-01 00:00:00', 0, 0, 0, 0),
(3, 1, 10153585547158306, 'ba', '2014-09-02 00:00:00', 0, 0, 0, 0),
(4, 1, 10153585547158306, 'bốn', '2014-09-03 00:00:00', 0, 0, 0, 0),
(5, 1, 10153585547158306, 'năm', '2014-09-05 00:00:00', 0, 0, 0, 0),
(6, 1, 10153585547158306, 'sáu', '2014-09-06 00:00:00', 0, 0, 0, 0),
(7, 1, 10153585547158306, 'bảy', '2014-09-07 00:00:00', 0, 0, 0, 0),
(8, 1, 10153585547158306, 'tám', '2014-09-08 00:00:00', 0, 0, 0, 0),
(9, 1, 10153585547158306, 'chín', '2014-09-09 00:00:00', 0, 0, 0, 0),
(10, 1, 10153585547158306, 'mười', '2014-09-10 00:00:00', 0, 0, 0, 0),
(11, 1, 10153585547158306, 'mười một', '2014-09-11 00:00:00', 0, 0, 0, 0),
(14, 12, 10153585547158306, 'rrr', '2014-10-08 20:09:35', 0, 0, 0, 0),
(15, 12, 10153585547158306, 'rrr', '2014-10-08 20:16:10', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reply_down`
--

CREATE TABLE IF NOT EXISTS `reply_down` (
  `reply_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `reply_image`
--

CREATE TABLE IF NOT EXISTS `reply_image` (
  `reply_id` int(11) NOT NULL,
  `image_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reply_image`
--

INSERT INTO `reply_image` (`reply_id`, `image_name`) VALUES
(13, 'qqq'),
(13, 'www'),
(14, 'qqq'),
(14, 'www'),
(15, 'qqq'),
(15, 'www');

-- --------------------------------------------------------

--
-- Table structure for table `reply_spam_reporter`
--

CREATE TABLE IF NOT EXISTS `reply_spam_reporter` (
  `reply_id` int(11) NOT NULL,
  `fb_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `reply_up`
--

CREATE TABLE IF NOT EXISTS `reply_up` (
  `reply_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `thread`
--

CREATE TABLE IF NOT EXISTS `thread` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `branch_id` varchar(64) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `solved` int(1) NOT NULL,
  `time` datetime NOT NULL,
  `rate` int(11) NOT NULL,
  `up` int(11) NOT NULL,
  `down` int(11) NOT NULL,
  `spam_status` int(1) NOT NULL,
  `spam_count` int(11) NOT NULL,
  `text` text NOT NULL,
  `comments` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `thread`
--

INSERT INTO `thread` (`id`, `branch_id`, `user_id`, `solved`, `time`, `rate`, `up`, `down`, `spam_status`, `spam_count`, `text`, `comments`) VALUES
(1, 'kfc_1', 10153585547158306, 1, '2014-09-17 00:00:00', 2, 15, 6, 0, 1, 'Hôm nay trời đẹp', 12),
(2, 'kfc_1', 10152503138978218, 0, '2014-09-09 00:00:00', 3, 9, 2, 0, 0, 'Hôm nay vui', 0),
(7, 'kfc_1', 10153585547158306, 0, '2014-10-09 00:44:16', 4, 0, 0, 0, 0, 'sss', 1),
(8, 'kfc_1', 10152503138978218, 0, '2014-11-22 21:27:50', 5, 0, 0, 0, 0, 'Hay thế cơ mà', 0);

-- --------------------------------------------------------

--
-- Table structure for table `thread_down`
--

CREATE TABLE IF NOT EXISTS `thread_down` (
  `thread_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thread_down`
--

INSERT INTO `thread_down` (`thread_id`, `fb_id`) VALUES
(1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `thread_image`
--

CREATE TABLE IF NOT EXISTS `thread_image` (
  `thread_id` int(11) NOT NULL,
  `image_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thread_image`
--

INSERT INTO `thread_image` (`thread_id`, `image_name`) VALUES
(7, 'abc'),
(7, 'xyz');

-- --------------------------------------------------------

--
-- Table structure for table `thread_spam_reporter`
--

CREATE TABLE IF NOT EXISTS `thread_spam_reporter` (
  `thread_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thread_spam_reporter`
--

INSERT INTO `thread_spam_reporter` (`thread_id`, `fb_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `thread_up`
--

CREATE TABLE IF NOT EXISTS `thread_up` (
  `thread_id` int(11) NOT NULL,
  `fb_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thread_up`
--

INSERT INTO `thread_up` (`thread_id`, `fb_id`) VALUES
(1, 2),
(1, 4),
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL,
  `name` text NOT NULL,
  `photo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `photo`) VALUES
(10152503138978218, 'Trần Đoàn Khánh Vũ', 'https://graph.facebook.com/10152503138978218/picture?type=large'),
(10153585547158306, 'Nguyễn Quang Phúc', 'https://graph.facebook.com/10153585547158306/picture?type=large');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
