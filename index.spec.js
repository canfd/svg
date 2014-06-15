/*
 * can-svg
 *
 * Copyright(c) 2014 André König <andre.koenig@konexmedia.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@konexmedia.com>
 *
 */

describe('The "can-svg" feature detector', function () {

    it('should be able to check if the browser supports SVG images', function () {
        expect(can.use('svg:image')).toBe(true);
    });
});