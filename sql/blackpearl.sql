-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 02 avr. 2021 à 22:16
-- Version du serveur :  5.7.24
-- Version de PHP : 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blackpearl`
--

-- --------------------------------------------------------

--
-- Structure de la table `rang`
--

CREATE TABLE `rang` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rang`
--

INSERT INTO `rang` (`id`, `nom`) VALUES
(1, 'peaky'),
(2, 'maitre'),
(3, 'sons');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `role`) VALUES
(1, 'Développeur'),
(2, 'Designer');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `rang` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `netcoin` int(11) NOT NULL,
  `sanctuaire` int(11) NOT NULL,
  `maitre` int(11) NOT NULL,
  `secure_key` varchar(255) NOT NULL,
  `banni` tinyint(1) NOT NULL,
  `raison_ban` varchar(255) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_connection` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ip_last_connection` varchar(50) NOT NULL,
  `compte_actif` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `user`, `password`, `email`, `rang`, `role`, `netcoin`, `sanctuaire`, `maitre`, `secure_key`, `banni`, `raison_ban`, `creation_date`, `last_connection`, `ip_last_connection`, `compte_actif`) VALUES
(1, 'max', '$2b$10$hhp4sFVhPui1QcOa.iwn8OSvPmH2T/6aAOXQdkgDdsr/2U9aY6ryO', 'email test', 1, 0, 0, 0, 0, '', 0, '', '2021-03-31 22:09:54', '2021-03-31 22:09:54', '', 1),
(3, 'max2', '$2b$10$KMbl8P/plUtRaK4A0gHhkee6EyMe4AnZfK0pfvQ0WbgXsrm/ZSarq', 'email test', 2, 0, 0, 0, 0, '', 0, '', '2021-03-31 22:09:54', '2021-03-31 22:09:54', '', 0),
(4, 'max3', '$2b$10$Rqcqsni2fTaBx/Df.yDF1Oxjta.9/lnnJhnL.FdVqvXUpUpBS1wnW', 'email test', 3, 0, 0, 0, 0, '', 0, '', '2021-03-31 22:09:54', '2021-03-31 22:09:54', '', 0),
(5, 'max4', '$2b$10$Y5K3HjlRJmI6g7L2SW69NOzMx5KX52Vn4UuD5RtbtiWxnc8afoz42', 'email test', 3, 0, 0, 0, 0, 'x8w6gAtrfSDOj8MTdVYnzhVMM73EL3kKkGgWO6Z3QnSJj0bnJz', 0, '', '2021-03-31 22:32:29', '2021-03-31 22:32:29', '', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `rang`
--
ALTER TABLE `rang`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `rang`
--
ALTER TABLE `rang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
