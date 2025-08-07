#!/usr/bin/env node

import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execa } from "execa";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  const { projectName, framework } = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Project name:",
      initial: "my-app",
    },
    {
      type: "select",
      name: "framework",
      message: "Choose your framework:",
      choices: [
        { title: "Next.js + Tailwind + ShadCN", value: "next" },
        { title: "React (Vite) + Tailwind + ShadCN", value: "react" },
      ],
    },
  ]);

  const targetDir = path.resolve(process.cwd(), projectName);
  const templateDir = path.join(__dirname, `../templates/${framework}`);

  // Check if directory already exists
  if (await fs.pathExists(targetDir)) {
    console.error(
      `❌ Directory "${projectName}" already exists. Please choose a different name.`
    );
    process.exit(1);
  }

  console.log(`\n📁 Copying ${framework} template...`);
  await fs.copy(templateDir, targetDir);

  process.chdir(targetDir);
  console.log("📦 Installing dependencies...");

  try {
    // Use legacy-peer-deps to avoid dependency conflicts
    await execa("npm", ["install", "--legacy-peer-deps"], { stdio: "inherit" });

    console.log(`\n✅ Project ${projectName} is ready!`);
    console.log(`\n👉 Next steps:`);
    console.log(`   cd "${projectName}"`);
    console.log(`   npm run dev`);

    if (framework === "next") {
      console.log(
        `\n🌐 Your Next.js app will be available at: http://localhost:3000`
      );
    } else {
      console.log(
        `\n🌐 Your React app will be available at: http://localhost:5173`
      );
    }
  } catch (error) {
    console.error("\n❌ Failed to install dependencies. You can try:");
    console.error(`   cd "${projectName}"`);
    console.error("   npm install --legacy-peer-deps");
    console.error("   npm run dev");
    throw error;
  }
}

run().catch((err) => {
  console.error("❌ Failed to create project:", err.message);
  process.exit(1);
});
