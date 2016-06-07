import assert from 'assert';
import emojiCommitAndReleases from '../src';

it('emojiCommitAndReleasesは1を返すべき', () => {
  assert(emojiCommitAndReleases() === 1);
});
