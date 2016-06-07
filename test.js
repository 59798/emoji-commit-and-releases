const EmojiCommitAndReleases = require('./')
const assert = require('assert')

it('EmojiCommitAndReleasesは1を返すべき', ()=>{
  assert(EmojiCommitAndReleases() === 1);
})
