import assert from 'assert';
import emojiCommitAndReleases, {sub} from '../src';

describe('emojiCommitAndReleases', () => {
  it('1を返すべき', () => {
    assert(emojiCommitAndReleases() === 1);
  });
});
describe('.sub', () => {
  it('2を返すべき', async () => {
    assert((await sub()) === 2);
  });
});
