-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2014 at 07:26 PM
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `address`) VALUES
('kfc_1', 'A43 Tr??ng S?n – Ph??ng 4 – Qu?n Tân Bình – Tp.HCM'),
('kfc_2', 'L?u 4 – DiamondPlaza 34 Lê Du?n – Ph??ng B?n Nghé – Qu?n 1- Tp.HCM'),
('kfc_3', 'Siêu th? Sài Gòn – s? 34 ???ng 3/2 – Ph??ng 12 – Qu?n 10 – Tp.HCM'),
('kfc_4', '15-17 C?ng Hòa – Ph??ng 4 – Qu?n Tân Bình – Tp.HCM'),
('kfc_5', '20 An D??ng V??ng – Ph??ng 9 – Qu?n 5 – Tp.HCM'),
('kfc_6', '74/2 Hai Bà Tr?ng – Ph??ng B?n Nghé – Qu?n 1- Tp.HCM'),
('kfc_7', '80 ???ng Tháp M??i – Ph??ng 2 – Qu?n 6 – Tp.HCM'),
('kfc_8', 'Co.op Mart – 571 Nguy?n Ki?m – Ph??ng 9 – Qu?n Phú Nhu?n – Tp.HCM');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `image`, `info`, `address`) VALUES
('cine_cinebox', 'Cinebox Cinema', 'cinebox_cinema.jpg', '', ''),
('cine_galaxy', 'Cinema Galaxy', 'galaxy_cinema.jpg', '', ''),
('cine_lotte', 'Cinema Lotteria', 'lotte_cinema.jpg', '', ''),
('cine_megastar', 'Cinema Megastar', 'megastar_cinema.jpg', '', ''),
('ff_burgerking', 'Burger King', 'burgerking.jpg', '', ''),
('ff_jollibee', 'Jollibee', 'jollibee.jpg', '', ''),
('ff_kfc', 'KFC', 'kfc.jpg', '', ''),
('ff_lotte', 'Lotteria', 'lotteria.jpg', '', ''),
('ff_mcdonald', 'Mc Donald''s', 'mcdonald.jpg', '', ''),
('ff_pizzahut', 'Pizza Hut', 'pizzahut.jpg', '', ''),
('gas_benthanh', 'Ben Thanh', 'ben_thanh.jpg', '', ''),
('gas_dbp', 'Dien Bien Phu', 'dien_bien_phu.jpg', '', ''),
('gas_notranglong', 'No Trang Long', 'no_trang_long.jpg', '', ''),
('gas_ntp', 'Nguyen Tri Phuong', 'nguyen_tri_phuong.jpg', '', ''),
('mall_aeon', 'Aeon Mall', 'aeon_mall.jpg', '', ''),
('mall_diamond', 'Diamond Plaza Mall', 'diamond_plaza.jpg', '', ''),
('mall_nowzone', 'Now Zone', 'nowzone.jpg', '', ''),
('mall_parkson', 'Parkson', 'parkson.jpg', '', ''),
('mall_vincom', 'Vincom', 'vincom.jpg', '', ''),
('mart_bigc', 'Big C', 'bigC.jpg', '', ''),
('mart_coopmart', 'Coop Mart', 'coopmart.jpg', '', ''),
('mart_lotte', 'Lotte Mart', 'lottemart.jpg', '', ''),
('mart_maximark', 'Maximark', 'maximark.jpg', '', ''),
('taxi_daukhicuulong', 'Dau Khi Cuu Long', 'dau_khi_cuu_long.jpg', '', ''),
('taxi_hoanglong', 'Hoang Long', 'hoang_long.jpg', '', ''),
('taxi_mailinh', 'Mai Linh', 'mai_linh.jpg', '', ''),
('taxi_phuongtrang', 'Phuong Trang', 'phuong_trang.jpg', '', ''),
('taxi_saigonair', 'Saigon Air', 'saigonair.jpg', '', ''),
('taxi_saigontourist', 'Saigontourist', 'saigontourist.jpg', '', ''),
('taxi_vinasun', 'Vinasun', 'vinasun.jpg', '', ''),
('taxi_vinataxi', 'Vina Taxi', 'vinataxi.jpg', '', ''),
('telco_beeline', 'Beeline', 'beeline.jpg', '', ''),
('telco_mobifone', 'Mobifone', 'mobifone.jpg', '', ''),
('telco_viettel', 'Viettel', 'viettel.jpg', '', ''),
('telco_vinaphone', 'Vinaphone', 'vinaphone.jpg', '', '');

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
