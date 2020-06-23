-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Jun 2020 pada 09.50
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_viana_thermal`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_face`
--

CREATE TABLE `tb_face` (
  `id_face` int(11) NOT NULL,
  `device` varchar(25) NOT NULL,
  `temperature` varchar(25) CHARACTER SET utf8 NOT NULL,
  `image` text CHARACTER SET utf8 NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `type` enum('normal','suspect') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_face`
--

INSERT INTO `tb_face` (`id_face`, `device`, `temperature`, `image`, `date`, `time`, `type`) VALUES
(7, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144430_0_36.6℃.JPG', '2020-05-09', '14:44:30', 'normal'),
(8, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144451_0_36.5℃.JPG', '2020-05-09', '14:44:51', 'normal'),
(9, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144052_0_36.5℃.JPG', '2020-05-09', '14:40:52', 'suspect'),
(10, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144044_0_36.6℃.JPG', '2020-05-09', '14:40:44', 'normal'),
(11, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144711_0_36.5℃.JPG', '2020-05-09', '14:47:11', 'normal'),
(12, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144713_0_36.6℃.JPG', '2020-05-09', '14:47:13', 'normal'),
(13, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144017_0_36.6℃.JPG', '2020-05-09', '14:40:17', 'normal'),
(14, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144044_0_36.6℃.JPG', '2020-05-09', '14:40:44', 'normal'),
(15, 'DEV01', '36.8℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144047_0_36.8℃.JPG', '2020-05-09', '14:40:47', 'normal'),
(16, 'DEV01', '37.2℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144047_0_37.2℃.JPG', '2020-05-09', '14:40:47', 'normal'),
(17, 'DEV01', '36.4℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144048_0_36.4℃.JPG', '2020-05-09', '14:40:48', 'normal'),
(18, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144048_0_36.6℃.JPG', '2020-05-09', '14:40:48', 'normal'),
(19, 'DEV01', '36.9℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144048_0_36.9℃.JPG', '2020-05-09', '14:40:48', 'normal'),
(20, 'DEV01', '37.0℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144049_0_37.0℃.JPG', '2020-05-09', '14:40:49', 'normal'),
(21, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144050_0_36.5℃.JPG', '2020-05-09', '14:40:50', 'normal'),
(22, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144052_0_36.5℃.JPG', '2020-05-09', '14:40:52', 'normal'),
(23, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144419_0_36.5℃.JPG', '2020-05-09', '14:44:19', 'normal'),
(24, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144419_0_36.6℃.JPG', '2020-05-09', '14:44:19', 'normal'),
(25, 'DEV01', '36.7℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144428_0_36.7℃.JPG', '2020-05-09', '14:44:28', 'normal'),
(26, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144430_0_36.6℃.JPG', '2020-05-09', '14:44:30', 'normal'),
(27, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144448_0_36.5℃.JPG', '2020-05-09', '14:44:48', 'normal'),
(28, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144451_0_36.5℃.JPG', '2020-05-09', '14:44:51', 'normal'),
(29, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144711_0_36.5℃.JPG', '2020-05-09', '14:47:11', 'normal'),
(30, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144713_0_36.6℃.JPG', '2020-05-09', '14:47:13', 'normal'),
(31, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144722_0_36.6℃.JPG', '2020-05-09', '14:47:22', 'normal'),
(32, 'DEV01', '36.1℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144723_0_36.1℃.JPG', '2020-05-09', '14:47:23', 'normal'),
(33, 'DEV01', '36.9℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144751_0_36.9℃.JPG', '2020-05-09', '14:47:51', 'normal'),
(34, 'DEV01', '36.0℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154137_0_36.0℃.JPG', '2020-05-09', '15:41:37', 'normal'),
(35, 'DEV01', '36.4℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154154_0_36.4℃.JPG', '2020-05-09', '15:41:54', 'normal'),
(36, 'DEV01', '36.1℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154207_0_36.1℃.JPG', '2020-05-09', '15:42:07', 'normal'),
(37, 'DEV01', '36.3℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154210_0_36.3℃.JPG', '2020-05-09', '15:42:10', 'normal'),
(38, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154214_0_36.6℃.JPG', '2020-05-09', '15:42:14', 'normal'),
(39, 'DEV01', '36.5℃.', '/WLIR/Reminder/2020-05-09/FACE_DC_2020-05-09_143902_0_36.5℃.JPG', '2020-05-09', '14:39:02', 'suspect'),
(40, 'DEV01', '36.6℃.', '/WLIR/Reminder/2020-05-09/FACE_DC_2020-05-09_143906_0_36.6℃.JPG', '2020-05-09', '14:39:06', 'suspect'),
(41, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_143906_0_36.6℃.JPG', '2020-05-09', '14:39:06', 'normal'),
(42, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-11/FACE_DC_2020-05-09_144430_0_36.6℃.JPG', '2020-05-09', '14:44:30', 'normal'),
(43, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-11/FACE_DC_2020-05-11_144713_0_36.6℃.JPG', '2020-05-11', '14:47:13', 'normal'),
(44, 'DEV01', '37.0℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_164049_0_37.0℃.JPG', '2020-05-09', '16:40:49', 'normal'),
(45, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_164713_0_36.6℃.JPG', '2020-05-09', '16:47:13', 'normal'),
(46, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_174711_0_36.5℃.JPG', '2020-05-09', '17:47:11', 'normal'),
(47, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_174711_0_36.5℃.JPG', '2020-05-09', '17:47:11', 'normal'),
(48, 'DEV01', '36.7℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_184428_0_36.7℃.JPG', '2020-05-09', '18:44:28', 'normal'),
(49, 'DEV01', '36.9℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_184751_0_36.9℃.JPG', '2020-05-09', '18:47:51', 'normal'),
(50, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_143902_0_36.5℃.JPG', '2020-05-09', '14:39:02', 'normal'),
(51, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_143906_0_36.6℃.JPG', '2020-05-09', '14:39:06', 'normal'),
(52, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144017_0_36.6℃.JPG', '2020-05-09', '14:40:17', 'normal'),
(53, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144044_0_36.6℃.JPG', '2020-05-09', '14:40:44', 'normal'),
(54, 'DEV01', '36.8℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144047_0_36.8℃.JPG', '2020-05-09', '14:40:47', 'normal'),
(55, 'DEV01', '37.2℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144047_0_37.2℃.JPG', '2020-05-09', '14:40:47', 'normal'),
(56, 'DEV01', '36.4℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144048_0_36.4℃.JPG', '2020-05-09', '14:40:48', 'normal'),
(57, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144048_0_36.6℃.JPG', '2020-05-09', '14:40:48', 'normal'),
(58, 'DEV01', '36.9℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144048_0_36.9℃.JPG', '2020-05-09', '14:40:48', 'normal'),
(59, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144050_0_36.5℃.JPG', '2020-05-09', '14:40:50', 'normal'),
(60, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144052_0_36.5℃.JPG', '2020-05-09', '14:40:52', 'normal'),
(61, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144419_0_36.5℃.JPG', '2020-05-09', '14:44:19', 'normal'),
(62, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144419_0_36.6℃.JPG', '2020-05-09', '14:44:19', 'normal'),
(63, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144430_0_36.6℃.JPG', '2020-05-09', '14:44:30', 'normal'),
(64, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144448_0_36.5℃.JPG', '2020-05-09', '14:44:48', 'normal'),
(65, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144451_0_36.5℃.JPG', '2020-05-09', '14:44:51', 'normal'),
(66, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144722_0_36.6℃.JPG', '2020-05-09', '14:47:22', 'normal'),
(67, 'DEV01', '36.1℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_144723_0_36.1℃.JPG', '2020-05-09', '14:47:23', 'normal'),
(68, 'DEV01', '36.0℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154137_0_36.0℃.JPG', '2020-05-09', '15:41:37', 'normal'),
(69, 'DEV01', '36.4℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154154_0_36.4℃.JPG', '2020-05-09', '15:41:54', 'normal'),
(70, 'DEV01', '36.1℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154207_0_36.1℃.JPG', '2020-05-09', '15:42:07', 'normal'),
(71, 'DEV01', '36.3℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154210_0_36.3℃.JPG', '2020-05-09', '15:42:10', 'normal'),
(72, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_154214_0_36.6℃.JPG', '2020-05-09', '15:42:14', 'normal'),
(73, 'DEV01', '37.0℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_164049_0_37.0℃.JPG', '2020-05-09', '16:40:49', 'normal'),
(74, 'DEV01', '36.6℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_164713_0_36.6℃.JPG', '2020-05-09', '16:47:13', 'normal'),
(75, 'DEV01', '36.5℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_174711_0_36.5℃.JPG', '2020-05-09', '17:47:11', 'normal'),
(76, 'DEV01', '36.7℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_184428_0_36.7℃.JPG', '2020-05-09', '18:44:28', 'normal'),
(77, 'DEV01', '36.9℃.', '/WLIR/Preview/2020-05-09/FACE_DC_2020-05-09_184751_0_36.9℃.JPG', '2020-05-09', '18:47:51', 'normal');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_face`
--
ALTER TABLE `tb_face`
  ADD PRIMARY KEY (`id_face`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_face`
--
ALTER TABLE `tb_face`
  MODIFY `id_face` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
