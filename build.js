import { createWindowsInstaller } from 'electron-winstaller';

async function toto() {
  try {
    await createWindowsInstaller({
      appDirectory: './release/win-unpacked',
      authors: 'Khant',
    });
    console.log('It worked!');
  } catch (e) {
    console.log(`No dice: ${e.message}`);
  }
}
toto();