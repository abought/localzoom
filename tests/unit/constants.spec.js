import { assert } from 'chai';
import { REGEX_MARKER, REGEX_REGION } from '../../src/util/constants';


describe('REGEX_MARKER', () => {
    it('handles various marker formats', () => {
        const has_chr_pos = ['chr1:23', 'chrX:23', '1:23', 'X:23'];
        const has_chr_pos_refalt = ['chr1:23_A/C', '1:23_A/C', 'chr:1:23:AAAA:G', '1:23_A|C'];
        const has_chr_pos_refalt_extra = [
            'chr1:23_A/C_gibberish', '1:23_A/C_gibberish', '1:23_A|C_gibberish',
        ];

        has_chr_pos.forEach((item) => {
            const match = item.match(REGEX_MARKER);
            assert.ok(match, REGEX_MARKER, `Match found for ${item}`);
            assert.lengthOf(match.filter(e => !!e), 3, `Found chr:pos for ${item}`);
        });
        has_chr_pos_refalt.forEach((item) => {
            const match = item.match(REGEX_MARKER);
            assert.ok(match, REGEX_MARKER, `Match found for ${item}`);
            assert.lengthOf(match.filter(e => !!e), 5, `Found chr:pos_ref/alt for ${item}`);
        });
        has_chr_pos_refalt_extra.forEach((item) => {
            const match = item.match(REGEX_MARKER);
            assert.ok(match, REGEX_MARKER, `Match found for ${item}`);
            assert.lengthOf(match.filter(e => !!e), 6, `Found chr:pos_ref/alt_extra for ${item}`);
        });
    });
});

describe('REGEX_REGION', () => {
    it('handles various region formats', () => {
        const scenarios = ['chr1:1-2', '1:2-3'];
        scenarios.forEach(item => assert.match(item, REGEX_REGION, `Match found for ${item}`));
    });
});
