<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}


function enqueue_swiper() {
    // Enqueue Swiper library from a CDN
    wp_enqueue_script('swiper', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), '6.7.5', true);
    
    // Enqueue Swiper CSS
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css', array(), '6.7.5');
}

add_action('wp_enqueue_scripts', 'enqueue_swiper');

function enqueue_swiper_slider_script() {
    // Enqueue Swiper Slider JavaScript from the child theme directory as a module
    wp_enqueue_script('swiper-slider', get_stylesheet_directory_uri() . '/swiper-slider.js', array('swiper'), null, true);
    wp_script_add_data('swiper-slider', 'type', 'module');
}

add_action('wp_enqueue_scripts', 'enqueue_swiper_slider_script');

function add_custom_scripts() {
    wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/custom.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'add_custom_scripts');