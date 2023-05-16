-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2023 at 04:54 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taskdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(150) NOT NULL,
  `offer` varchar(150) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `mimi_type` varchar(255) NOT NULL,
  `created_on` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `offer`, `file_name`, `file_path`, `mimi_type`, `created_on`) VALUES
(1, 'true', 'banner1.jpeg', '../asset', 'image/jpeg', '2023-05-15 23:56:50'),
(2, 'false', 'banner2.jpeg', '../asset', 'image/jpeg', '2023-05-16 07:47:59');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(50) NOT NULL,
  `user_fav` varchar(150) DEFAULT NULL,
  `vehicle_name` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_part_code` varchar(255) NOT NULL,
  `rating` int(20) NOT NULL,
  `review` varchar(255) NOT NULL,
  `offer_price` int(255) NOT NULL,
  `real_price` int(150) NOT NULL,
  `hot_sale` varchar(255) NOT NULL,
  `top_rated` varchar(255) NOT NULL,
  `special` varchar(255) NOT NULL,
  `best_seller` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `mimi_type` varchar(255) NOT NULL,
  `created_on` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `user_fav`, `vehicle_name`, `product_name`, `product_part_code`, `rating`, `review`, `offer_price`, `real_price`, `hot_sale`, `top_rated`, `special`, `best_seller`, `file_name`, `file_path`, `mimi_type`, `created_on`) VALUES
(1, 'true', 'Car', 'Engine', 'EC545HG', 9, 'Too good', 2873, 3525, 'true', 'true', 'true', 'true', 'product-1.jpeg', '../asset', 'image/jpeg', '2023-05-16 07:28:13'),
(2, NULL, 'Bike', 'Silencer', 'BE86787JHK', 6, 'Good Condition', 5721, 7949, 'false', 'true', 'false', 'true', 'product-2.jpeg', '../asset', 'image/jpeg', '2023-05-15 23:41:45'),
(3, NULL, 'Car', 'Oil', 'OI545HG', 8, 'Good', 302, 500, 'false', 'false', 'false', 'true', 'product-3.jpeg', '../asset', 'image/jpeg', '2023-05-15 23:41:45'),
(4, 'true', 'Car', 'Engile', 'BE86787JHK', 3, 'Ok', 28763, 343943, 'false', 'false', 'false', 'true', 'product-4.jpeg', '../asset', 'image/jpeg', '2023-05-16 07:28:22'),
(5, NULL, 'Jeep', 'Break_Shoe', 'BSG545HG', 6, 'Cool', 12123, 124321, 'false', 'true', 'true', 'false', 'product-5.jpeg', '../asset', 'image/jpeg', '2023-05-15 23:41:45'),
(6, NULL, 'Car', 'Engine', 'EGE86787JHK', 7, 'Good Condition', 5721, 7949, 'true', 'true', 'false', 'true', 'product-6.jpeg', '../asset', 'image/jpeg', '2023-05-15 23:41:45'),
(7, NULL, 'Van', 'Tire', 'OI545HG', 10, 'Too good', 7632, 3292, 'false', 'true', 'false', 'false', 'product-7.jpeg', '../asset', 'image/jpeg', '2023-05-15 23:41:45'),
(8, NULL, 'Bike', 'Head_Light', 'HFS7657JKH', 10, 'Cool', 28763, 343943, 'true', 'false', 'true', 'true', 'product-8.jpeg', '../asset', 'image/jpeg', '2023-05-15 23:41:45');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(150) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_name`, `email`, `password`, `created_on`) VALUES
(1, 'Raghul', 'raghul@gmail.com', '$2b$07$y53yCfTTs0yasqSRE/vEC.kCSj7FMiqNq.VLMPtr9YobEG6C8l98S', '2023-05-15 20:50:23.671264');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
