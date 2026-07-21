// Git Beginners - Interactive Learning Script
// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  applyTheme(currentTheme);
  
  // Theme toggle button event listener
  themeToggle.addEventListener('click', function() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
});

/**
 * Apply theme to the document
 * @param {string} theme - 'light' or 'dark'
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeButtonText(theme);
}

/**
 * Update theme toggle button text
 * @param {string} theme - current theme
 */
function updateThemeButtonText(theme) {
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

/**
 * Git Commands Reference Helper
 */
const gitCommands = {
  'init': {
    command: 'git init',
    description: 'Initialize a new Git repository',
    example: 'git init my-project'
  },
  'clone': {
    command: 'git clone',
    description: 'Clone an existing repository',
    example: 'git clone https://github.com/user/repo.git'
  },
  'add': {
    command: 'git add',
    description: 'Stage changes for commit',
    example: 'git add . (adds all files) or git add file.txt (specific file)'
  },
  'commit': {
    command: 'git commit',
    description: 'Create a commit with staged changes',
    example: 'git commit -m "Your commit message here"'
  },
  'push': {
    command: 'git push',
    description: 'Push commits to remote repository',
    example: 'git push origin main'
  },
  'pull': {
    command: 'git pull',
    description: 'Fetch and merge changes from remote',
    example: 'git pull origin main'
  },
  'branch': {
    command: 'git branch',
    description: 'Create, list, or delete branches',
    example: 'git branch (list) or git branch new-feature (create)'
  },
  'checkout': {
    command: 'git checkout',
    description: 'Switch branches or restore files',
    example: 'git checkout feature-branch'
  },
  'status': {
    command: 'git status',
    description: 'Show working tree status',
    example: 'git status'
  },
  'log': {
    command: 'git log',
    description: 'Show commit history',
    example: 'git log --oneline'
  }
};

/**
 * Get a random git tip for learning
 */
function getRandomGitTip() {
  const tips = [
    'Always write clear and descriptive commit messages!',
    'Use branches to organize your work and collaborate effectively.',
    'Pull before you push to avoid merge conflicts.',
    'Commit often with logical, atomic changes.',
    'Use .gitignore to exclude files that shouldn\'t be tracked.',
    'Review your changes before committing with "git diff".',
    'Use meaningful branch names like "feature/user-auth" or "bugfix/login-issue".',
    'Never force push to main branch!',
    'Squash commits to keep history clean during pull requests.',
    'Tag important releases with git tag.'
  ];
  return tips[Math.floor(Math.random() * tips.length)];
}

/**
 * Log a git tip to console (useful for developers)
 */
function logDailyTip() {
  console.log('%c💡 Git Tip:', 'color: #4CAF50; font-size: 14px; font-weight: bold;');
  console.log(getRandomGitTip());
}

// Log a tip on page load
logDailyTip();

/**
 * Display Git command reference
 * @param {string} command - command name to look up
 */
function getGitCommand(command) {
  const cmd = gitCommands[command.toLowerCase()];
  if (cmd) {
    return `
    Command: ${cmd.command}
    Description: ${cmd.description}
    Example: ${cmd.example}
    `;
  }
  return 'Command not found in reference. Available commands: ' + Object.keys(gitCommands).join(', ');
}

// Export functions for console access
window.gitHelper = {
  getCommand: getGitCommand,
  getTip: getRandomGitTip,
  commands: gitCommands
};

// Developer-friendly console message
console.log('%c🎓 Welcome to Git Beginners!', 'color: #2196F3; font-size: 16px; font-weight: bold;');
console.log('Try these commands in the console:');
console.log('gitHelper.getCommand("init") - Get help on git init');
console.log('gitHelper.getTip() - Get a random Git tip');
console.log('gitHelper.commands - View all available commands');
