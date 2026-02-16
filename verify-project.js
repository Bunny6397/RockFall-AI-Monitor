#!/usr/bin/env node

/**
 * Rockfall AI Monitor - Project Verification Script
 * Checks that all required files are present and properly configured
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Rockfall AI Monitor - Project Verification\n');
console.log('=' .repeat(60));

// Required files
const requiredFiles = {
    'HTML Pages': [
        'index.html',
        'dashboard.html',
        'risk-map.html',
        'alerts.html',
        'data-sources.html',
        'analytics.html',
        'privacy-policy.html',
        'terms-of-service.html',
        'contact.html'
    ],
    'JavaScript Files': [
        'app.js',
        'dashboard.js',
        'risk-map.js',
        'alerts.js',
        'data-sources.js',
        'analytics.js'
    ],
    'Styles': [
        'styles.css'
    ],
    'Backend': [
        'server.js',
        'package.json',
        '.env.example',
        '.gitignore'
    ],
    'Documentation': [
        'README.md',
        'START_HERE.md',
        'API_DOCUMENTATION.md',
        'TESTING_GUIDE.md'
    ]
};

let totalFiles = 0;
let foundFiles = 0;
let missingFiles = [];

// Check each category
for (const [category, files] of Object.entries(requiredFiles)) {
    console.log(`\n📁 ${category}:`);
    
    files.forEach(file => {
        totalFiles++;
        const filePath = path.join(__dirname, file);
        const exists = fs.existsSync(filePath);
        
        if (exists) {
            foundFiles++;
            const stats = fs.statSync(filePath);
            const size = (stats.size / 1024).toFixed(2);
            console.log(`   ✅ ${file} (${size} KB)`);
        } else {
            missingFiles.push(file);
            console.log(`   ❌ ${file} - MISSING`);
        }
    });
}

// Check node_modules
console.log('\n📦 Dependencies:');
const nodeModulesExists = fs.existsSync(path.join(__dirname, 'node_modules'));
if (nodeModulesExists) {
    console.log('   ✅ node_modules directory exists');
} else {
    console.log('   ⚠️  node_modules not found - run "npm install"');
}

// Check uploads directory
console.log('\n📤 Upload Directory:');
const uploadsExists = fs.existsSync(path.join(__dirname, 'uploads'));
if (uploadsExists) {
    console.log('   ✅ uploads directory exists');
} else {
    console.log('   ⚠️  uploads directory not found - will be created on server start');
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('\n📊 Summary:');
console.log(`   Total files checked: ${totalFiles}`);
console.log(`   Files found: ${foundFiles}`);
console.log(`   Files missing: ${missingFiles.length}`);

if (missingFiles.length > 0) {
    console.log('\n❌ Missing files:');
    missingFiles.forEach(file => console.log(`   - ${file}`));
}

// Check package.json scripts
console.log('\n🔧 Available Scripts:');
try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    if (packageJson.scripts) {
        Object.entries(packageJson.scripts).forEach(([name, command]) => {
            console.log(`   • npm run ${name}: ${command}`);
        });
    }
} catch (error) {
    console.log('   ⚠️  Could not read package.json');
}

// Final status
console.log('\n' + '='.repeat(60));
if (foundFiles === totalFiles && nodeModulesExists) {
    console.log('\n✅ PROJECT STATUS: READY TO RUN!');
    console.log('\n🚀 To start the application:');
    console.log('   1. Backend:  npm start');
    console.log('   2. Frontend: python3 -m http.server 8000');
    console.log('   3. Open:     http://localhost:8000\n');
} else if (foundFiles === totalFiles && !nodeModulesExists) {
    console.log('\n⚠️  PROJECT STATUS: DEPENDENCIES NEEDED');
    console.log('\n📦 Run: npm install\n');
} else {
    console.log('\n❌ PROJECT STATUS: INCOMPLETE');
    console.log(`\n   ${missingFiles.length} file(s) missing\n`);
}

console.log('=' .repeat(60) + '\n');
