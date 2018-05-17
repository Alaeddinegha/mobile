-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 28 Mars 2018 à 21:30
-- Version du serveur :  5.7.21-0ubuntu0.16.04.1
-- Version de PHP :  7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `forum`
--

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id_ques` int(11) NOT NULL,
  `text_ques` varchar(500) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_uti` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `questions`
--

INSERT INTO `questions` (`id_ques`, `text_ques`, `date`, `id_uti`) VALUES
(1, 'comment installer apache2?', '2018-03-10 15:43:59', 1),
(2, 'comment configurer apache2', '2018-03-10 15:43:59', 2);

-- --------------------------------------------------------

--
-- Structure de la table `reponses`
--

CREATE TABLE `reponses` (
  `id_rep` int(11) NOT NULL,
  `text_rep` varchar(500) NOT NULL,
  `date_rep` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_ques` int(11) NOT NULL,
  `id_uti` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `reponses`
--

INSERT INTO `reponses` (`id_rep`, `text_rep`, `date_rep`, `id_ques`, `id_uti`) VALUES
(1, 'tapper install apache2', '2018-03-10 16:00:51', 1, 0),
(2, 'regardez la doc de apache', '2018-03-10 16:00:51', 1, 0),
(3, 'aller sur configuration apache2', '2018-03-10 16:01:26', 2, 0),
(4, 'regarder le tuto de connelly sur youtube', '2018-03-18 11:23:30', 6, 1),
(21, 'aller sur la documentation', '2018-03-20 12:23:26', 6, 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id_uti` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `pw` varchar(20) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id_uti`, `login`, `pw`, `nom`, `prenom`) VALUES
(1, 'admin', 'admin', 'Gharsellaoui', 'Ala Eddine'),
(2, 'user1', 'user', 'Simao', 'Carole');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id_ques`),
  ADD KEY `id_uti` (`id_uti`);

--
-- Index pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD PRIMARY KEY (`id_rep`),
  ADD KEY `id_ques` (`id_ques`),
  ADD KEY `id_uti` (`id_uti`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id_uti`),
  ADD UNIQUE KEY `login` (`login`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id_ques` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT pour la table `reponses`
--
ALTER TABLE `reponses`
  MODIFY `id_rep` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id_uti` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
