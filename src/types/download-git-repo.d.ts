declare module 'download-git-repo' {
  export default function download(
    repository: string,
    destination: string,
    options: {
      clone: boolean
    },
    callback: (err?: Error) => void
  ): void
}
