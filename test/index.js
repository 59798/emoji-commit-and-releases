import assert from 'assert';
import emojiCommitAndReleases from '../src';

describe('emojiCommitAndReleases', () => {
  it('1を返すべき', () => {
    assert(emojiCommitAndReleases() === 1);
  });
});
