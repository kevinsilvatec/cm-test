module.exports = {
    apps: [
        {
            name: 'send-mail-api',
            script: 'server.js',
            instances: 1,
            exec_mode: 'fork',
            max_memory_restart: '200M'
        }
    ]
}
