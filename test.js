const assert = require('assert');
const emojiCommitAndReleases = require('./');

it('emojiCommitAndReleasesは1を返すべき', () => {
  assert(emojiCommitAndReleases() === 1);
});
