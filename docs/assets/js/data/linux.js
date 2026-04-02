const TRACKS_LINUX = [
  {
    id: 'linux', cat: 'linux', tag: 'Linux', tagClass: 't-linux',
    title: 'Essential Linux commands for data engineers',
    subs: [
      { title: 'Navigation & file ops', items: ['ls -la, cd, pwd, mkdir -p, rm -rf, cp -r, mv, touch', 'find . -name "*.csv" -type f -mtime -7', 'chmod 755, chown user:group, ls -la for permissions', 'du -sh, df -h — disk usage at file and system level', 'ln -s — create symbolic links for data files'] },
      { title: 'Text processing (critical for DE)', items: ['grep -r -i -n "pattern" — recursive, case-insensitive, with line numbers', 'grep -v — invert match (exclude pattern)', "awk '{print $1, $3}' — extract specific fields", 'awk -F"," — custom delimiter (CSV processing)', "sed -i 's/old/new/g' — in-place substitution", 'cut -d"," -f1,3 — cut specific CSV columns', 'sort | uniq -c | sort -rn — frequency count pattern', 'wc -l — count lines (size a file fast)', 'head -100, tail -f — inspect files, follow logs in real-time'] },
      { title: 'Process & system ops', items: ['ps aux, top, htop — monitor running processes', 'kill -9 PID, killall process-name', 'nohup command & — run detached from terminal', 'crontab -e — schedule recurring jobs', 'env, export VAR=value — environment variables', 'ssh user@host, scp file user@host:/path', 'rsync -avz — efficient incremental file sync'] },
      { title: 'Pipeline tricks', items: ['pipe | — chain commands together', '> overwrite, >> append to file', 'tee — write to file AND stdout simultaneously', 'jq . file.json — parse and filter JSON on command line', 'curl -X GET url | jq — API call + parse', 'tar -czf archive.tar.gz dir/ — compress', 'zcat file.gz | grep pattern — search compressed file without extracting', 'screen -S session / tmux new -s session — persistent terminal sessions'] }
    ]
  }
];
