<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'monSiteTest');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'h=DEP#49_sN<5Z*EJRKZ&NIldO;nt)[ khte<44+omdl|t<}Ym?f:Y-9H_.-t_X6');
define('SECURE_AUTH_KEY',  'gH8dN-:bt;*)aLLr;)]-4D,ZLritC-niZE@,Gby X6_U>SUrb#HNaKX~_T{ lZRe');
define('LOGGED_IN_KEY',    'vPq?RorioeU[*a1YiagzADR24+kyU=l3]n!l1q#Y@VmJ*#{iJ*PRW4xQp4IlD1vc');
define('NONCE_KEY',        'Vb)mW$O?N1fy]%-5<<*NvLS_8z-8TL/6LwuNnX!1h.Ugl~#(O.jLw-I3ZfcI]%z0');
define('AUTH_SALT',        '4XvmPH`SQ0j0-slluG#I%y}hpqIS)4%L<&%Nqzw:@A6RrN>IU!2T!TZ}9p?Y0lPt');
define('SECURE_AUTH_SALT', '!7P8d03I~Qr 5ry LPrZ/ &An_8cXMQ@ra&2qxuI`Fbg{;CuK {CYJm_oB_i1Z*h');
define('LOGGED_IN_SALT',   'b-_U7<2*G`}!$Y=/=Kj<>9Otjk2p#L7.njA)OF$z^>v.iT,NW,[zHR]n6`fg)hxq');
define('NONCE_SALT',       'w+oGz?scu2;MOmvr<;PXEs,@;w|j>|uF93N6s<]q+~;`Ev/OvZjlHhz;=$6_ii`w');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');