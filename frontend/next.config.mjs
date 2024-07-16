/** @type {import('next').NextConfig} */
const nextConfig = {


    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Enable WebAssembly support
        config.experiments = {
          ...config.experiments, // Copy any existing experiments
          asyncWebAssembly: true,
        };
    
        // Example: Adding a rule for .wasm files
        config.module.rules.push({
          test: /\.wasm$/,
          type: 'webassembly/async',
        });
    
        // Important: return the modified config
        return config;
      },

   


};

export default nextConfig;
