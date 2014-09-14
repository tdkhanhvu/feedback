-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2014 at 08:05 PM
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
('cine_cinebox', 'Cinebox Cinema', 'cinebox_cinema.jpg', '', '', '', '', 0),
('cine_galaxy', 'Cinema Galaxy', 'galaxy_cinema.jpg', '', '', '', '', 0),
('cine_lotte', 'Cinema Lotteria', 'lotte_cinema.jpg', '', '', '', '', 0),
('cine_megastar', 'Cinema Megastar', 'megastar_cinema.jpg', '', '', '', '', 0),
('ff_burgerking', 'Burger King', 'burgerking.jpg', '', '', '', '', 0),
('ff_jollibee', 'Jollibee', 'jollibee.jpg', '', '', '', '', 0),
('ff_kfc', 'KFC', 'kfc.jpg', '', '', '', '', 0),
('ff_lotte', 'Lotteria', 'lotteria.jpg', '', '', '', '', 0),
('ff_mcdonald', 'Mc Donald''s', 'mcdonald.jpg', '', '', '', '', 0),
('ff_pizzahut', 'Pizza Hut', 'pizzahut.jpg', '', '', '', '', 0),
('gas_benthanh', 'Ben Thanh', 'ben_thanh.jpg', '', '', '', '', 0),
('gas_dbp', 'Dien Bien Phu', 'dien_bien_phu.jpg', '', '', '', '', 0),
('gas_notranglong', 'No Trang Long', 'no_trang_long.jpg', '', '', '', '', 0),
('gas_ntp', 'Nguyen Tri Phuong', 'nguyen_tri_phuong.jpg', '', '', '', '', 0),
('mall_aeon', 'Aeon Mall', 'aeon_mall.jpg', '', '', '', '', 0),
('mall_diamond', 'Diamond Plaza Mall', 'diamond_plaza.jpg', '', '', '', '', 0),
('mall_nowzone', 'Now Zone', 'nowzone.jpg', '', '', '', '', 0),
('mall_parkson', 'Parkson', 'parkson.jpg', '', '', '', '', 0),
('mall_vincom', 'Vincom', 'vincom.jpg', '', '', '', '', 0),
('mart_bigc', 'Big C', 'bigC.jpg', '', '', '', '', 0),
('mart_coopmart', 'Coop Mart', 'coopmart.jpg', '', '', '', '', 0),
('mart_lotte', 'Lotte Mart', 'lottemart.jpg', '', '', '', '', 0),
('mart_maximark', 'Maximark', 'maximark.jpg', '', '', '', '', 0),
('taxi_daukhicuulong', 'Dau Khi Cuu Long', 'dau_khi_cuu_long.jpg', '', '', '', '', 0),
('taxi_hoanglong', 'Hoang Long', 'hoang_long.jpg', '', '', '', '', 0),
('taxi_mailinh', 'Mai Linh', 'mai_linh.jpg', '', '', '', '', 0),
('taxi_phuongtrang', 'Phuong Trang', 'phuong_trang.jpg', '', '', '', '', 0),
('taxi_saigonair', 'Saigon Air', 'saigonair.jpg', '', '', '', '', 0),
('taxi_saigontourist', 'Saigontourist', 'saigontourist.jpg', '', '', '', '', 0),
('taxi_vinasun', 'Vinasun', 'vinasun.jpg', '', '', '', '', 0),
('taxi_vinataxi', 'Vina Taxi', 'vinataxi.jpg', '', '', '', '', 0),
('telco_beeline', 'Beeline', 'beeline.jpg', '', '', '', '', 0),
('telco_mobifone', 'Mobifone', 'mobifone.jpg', '', '', '', '', 0),
('telco_viettel', 'Viettel', 'viettel.jpg', '', '', '', '', 0),
('telco_vinaphone', 'Vinaphone', 'vinaphone.jpg', '', '', '', '', 0);

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
  `id` text NOT NULL,
  `name` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
