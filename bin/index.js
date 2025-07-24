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

  console.log(`\n📁 Copying ${framework} template...`);
  await fs.copy(templateDir, targetDir);

  process.chdir(targetDir);
  console.log("📦 Installing dependencies...");
  await execa("npm", ["install"], { stdio: "inherit" });

  console.log(`\n✅ Project ${projectName} is ready.`);
  console.log(`\n👉 cd ${projectName} && npm run dev`);
}

run().catch((err) => {
  console.error("❌ Failed to create project:", err);
  process.exit(1);
});
