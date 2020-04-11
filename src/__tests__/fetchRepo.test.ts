import mockFs from 'mock-fs'
import download from 'download-git-repo'
import { fetchRepo } from '../fetchRepo'

jest.mock('../util/fs', () => ({
  __esModule: true,
  createTempDir: jest.fn(() => '/var/tmp/code-theme-converter')
}))

jest.mock('download-git-repo', () => ({
  __esModule: true,
  default: jest.fn((_repository, _destination, _options, callback) => callback())
}))

describe('fetchRepo', () => {
  beforeEach(() => jest.clearAllMocks())
  afterEach(() => mockFs.restore())

  it('should be defined', () => {
    expect(fetchRepo).toBeDefined()
  })

  it('should fetch the given repository into a temp dir', async () => {
    mockFs({
      '/var/tmp/code-theme-converter': {}
    })
    const converterRepo = await fetchRepo(
      'https://github.com/tobiastimm/raiju.git'
    )
    expect(converterRepo).toEqual({
      repo: '/var/tmp/code-theme-converter/repo',
      root: '/var/tmp/code-theme-converter'
    })
    expect(download).toHaveBeenCalled()
    expect(download).toHaveBeenCalledWith(
      'direct:https://github.com/tobiastimm/raiju.git',
      '/var/tmp/code-theme-converter/repo',
      { clone: true },
      expect.any(Function)
    )
  })

  it('should throw an error, if anything goes wrong', async () => {
    expect.assertions(1)

    mockFs({
      '/var/tmp/code-theme-converter': {}
    })

    const downloadMock = download as jest.Mock
    downloadMock.mockImplementation(
      (repository, destination, options, callback) =>
        callback(new Error('Not valid url'))
    )
    return expect(
      fetchRepo('https://github.com/tobiastimm/raiju.git')
    ).rejects.toThrowError('Not valid url')
  })
})
