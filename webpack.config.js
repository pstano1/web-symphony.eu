module.exports = {
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/icons',
            },
          },
        ],
      },
      {
        test: /\.ts$/, // Add a rule for TypeScript files
        use: 'ts-loader', // Use ts-loader for TypeScript files
        exclude: /node_modules/, // Exclude node_modules directory
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Add .ts extension to resolve TypeScript files
  },
}