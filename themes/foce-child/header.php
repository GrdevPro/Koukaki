<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <script type="module" src="<?php echo get_stylesheet_directory_uri(); ?>/burger.js"></script>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

        <header id="masthead" class="site-header">
            <div class="overlay">

                <div class="menu">

                    <div class="left-img-menu-burger">

                        <img class="purple-flower" src="\wp-content\uploads\2023\menu-burger\Orchid.png" alt=""
                            width="100" height="100" srcset="">

                        <img class="purple-cat hover-oscillation" src="\wp-content\uploads\2023\menu-burger\cat.png"
                            alt="" width="300" height="300" srcset="">
                        <img class="orange-wheel" src="\wp-content\uploads\2023\menu-burger\Flower (1).png" alt=""
                            srcset="">
                        <img class="orange-cat hover-oscillation" src="\wp-content\uploads\2023\menu-burger\cat (1).png"
                            alt="" srcset="">
                    </div>
                    <div class="middle">
                        <img class="title-menu-burger"
                            src="wp-content\uploads\2023\menu-burger\Image logo en paralax.png" alt="logo-title"
                            srcset="">
                        <ul>
                            <li><a href=" #">Histoire</a></li>
                            <li><a href="#">Personnages</a></li>
                            <li><a href="#">Lieu</a></li>
                            <li><a href="#">Studio Koukaki</a></li>
                        </ul>
                        <img src="\wp-content\uploads\2023\menu-burger\Studio Koukaki.png" alt="">
                    </div>
                    <div class="right-img-menu-burger">
                        <img class="sunflower" src="\wp-content\uploads\2023\menu-burger\Sunflower.png" alt=""
                            srcset="">
                        <img class="purple-yellow-flower" src="\wp-content\uploads\2023\menu-burger\Random Flower.png"
                            alt="" srcset="">
                        <img class="black-cat hover-oscillation"
                            src="\wp-content\uploads\2023\menu-burger\Group 180.png" alt="" srcset="">
                        <img class="big-flower" src="\wp-content\uploads\2023\menu-burger\Hibiscus footer.png" alt=""
                            srcset="">
                    </div>

                </div>
            </div>

            <nav id="site-navigation" class="main-navigation">
                <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                        rel="home"><?php bloginfo( 'name' ); ?></a></li>
                <div class="menu-burger">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="menu-icon">
                        <img src="\wp-content\uploads\2023\menu-burger\Burger croix.png" alt="Icône du menu" />
                    </div>
                </div>
            </nav><!-- #site-navigation -->

        </header><!-- #masthead -->