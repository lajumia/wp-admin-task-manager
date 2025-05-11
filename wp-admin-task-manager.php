<?php
/**
 * Plugin Name: WP Admin Task Manager
 * Plugin URI: https://github.com/lajumia/wp-admin-task-manager.git
 * Description: Manage admin tasks and todo list inside WordPress using React.
 * Version: 1.0.0
 * Author: Md Laju Miah
 * Author URI: https://www.upwork.com/freelancers/~0149190c8d83bae2e2
 * License: GPLv2 or later
*
 */

defined('ABSPATH') || exit;

// Hook admin menu
add_action('admin_menu', 'watm_register_admin_page');

function watm_register_admin_page() {
    add_menu_page(
        'Task Manager',
        'Task Manager',
        'manage_options',
        'wp-admin-task-manager',
        'watm_render_admin_page',
        'dashicons-list-view',
        26
    );
}

// Render admin page with React root
function watm_render_admin_page() {
    echo '<div id="watm-admin-root"></div>';
}

// Enqueue React scripts
add_action('admin_enqueue_scripts', 'watm_enqueue_admin_assets');
function watm_enqueue_admin_assets($hook) {
    if ($hook !== 'toplevel_page_wp-admin-task-manager') return;

    $index_dep = include_once plugin_dir_path(__FILE__) . 'admin/views/index.asset.php';
    wp_enqueue_script(
        'watm-admin', 
        plugin_dir_url(__FILE__) . 'admin/views/index.js',
        $index_dep['dependencies'],
        $index_dep['version'],
        true
        
    );
    
    wp_enqueue_style(
        'watm-admin',
        plugin_dir_url(__FILE__) . 'admin/assets/css/watm.css',
        [],
        $index_dep['version']
    );
}
