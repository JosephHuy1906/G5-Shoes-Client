/** @type {import('next').NextConfig} */
const path = require('path');
// const environment = require('./src/environments/environment.ts');
// đoãn mã trên sau khi run build rồi mới chạy tạm thời cứ sài đoạn này
const isEnvProduction = process.env.NODE_ENV === 'production';


const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'global')],
    },
   
};

module.exports = nextConfig;
