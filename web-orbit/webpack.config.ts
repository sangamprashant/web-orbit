module.exports = {
    // ...other configurations
    module: {
      rules: [
        // ...other rules
        {
          test: /\.(gltf|glb)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/models',
              },
            },
          ],
        },
      ],
    },
  };
  