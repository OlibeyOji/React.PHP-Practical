-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2024 at 01:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usersdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'jkhgiukjghm', 'jgk,jmhb jkm,'),
(2, 'jgiukjh', '$2y$10$KEaYgHYJiHp99Cxgr8WsXuQdtlKuVvkoCB1MujxGc0BQXuAtpLET6'),
(3, 'jgiukjhjkghkj', '$2y$10$gvTwmNpq8KJ.BL0EQb6NbONjVmMEQdpL0N4bsI1dSGVc0AbIWR972'),
(4, 'Sunisha Lee', '$2y$10$tghVBggCSG3LN.8owIiDauG6jqjqGYyRA/nQtVD.1SNQO3ssa.W/u'),
(5, '', '$2y$10$LIgxfoHiWQVnVPx1W8p1qObCtd5YTAyPJoYn/.VLzXx511s0hTNVO'),
(6, 'Sunisha Lees', '$2y$10$3p1MlfvWD2566OQm87k7uuTh8.7y8yNC0kDhmKN84jrb65HJtGqP.'),
(7, 'Sunisha 99', '$2y$10$3hwjE3C4OR9/pogdAqC98uSbLehoWCUCLRFih5KFKnH7EH6B1e49.'),
(8, 'Mark Goldbridge', '$2y$10$WCoq/rCuQxxXtgrU6EDCQO20hHrNIhmVt8OxlWOFLDVkkh8UUyBR6'),
(9, 'Mark Goldbridge3', '$2y$10$x00VfdEKWwBzHl/w0l/wY.YlFO4uevbAnGdL8t9DZ/GKCF9UgYjMu'),
(10, 'Sunisha Lee3', '$2y$10$lcw8XEHE2s57txjGcHeUXOQIe.oItacqwkizQKbeUdY/z7M3SfbJ2'),
(11, 'Katie Henshaw', '$2y$10$yD/wZ0blRCqB935tG3FvreTt44lOS/9gMdsVB4BTBt9w0c2ULKQ7C');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
