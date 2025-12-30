
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

async function convertImages() {
    try {
        const files = fs.readdirSync(publicDir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const inputPath = path.join(publicDir, file);
                const outputPath = path.join(publicDir, path.basename(file, ext) + '.webp');

                if (fs.existsSync(outputPath)) {
                    console.log(`Skipping ${file}, ${path.basename(outputPath)} already exists.`);
                    continue;
                }

                console.log(`Converting ${file} to WebP...`);
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
            }
        }
        console.log('All images converted!');
    } catch (err) {
        console.error('Error converting images:', err);
    }
}

convertImages();
