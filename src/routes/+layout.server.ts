import { npm_package_version, npm_package_name, npm_command, npm_config_engine_strict, npm_config_registry, npm_config_frozen_lockfile, npm_config_node_gyp, npm_config_user_agent, npm_execpath, npm_lifecycle_event, npm_lifecycle_script, npm_node_execpath, npm_package_type } from '$env/static/private';
export const load = async ({ locals }) => {
    console.log('npm_package_version', npm_command, npm_package_version, npm_package_name, npm_config_engine_strict, npm_config_registry, npm_config_frozen_lockfile,
        npm_config_node_gyp, npm_config_user_agent, npm_execpath, npm_lifecycle_event, npm_lifecycle_script, npm_node_execpath, npm_package_type
    );
    return {
        theme: locals.theme,
        version: npm_package_version,
        name: npm_package_name
    }
}