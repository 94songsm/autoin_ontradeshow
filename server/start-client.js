const args = ["-s build"]
const opts = { stdio: "inherit", cwd: "client", shell: true }
require("child_process").spawn("serve", args, opts)

