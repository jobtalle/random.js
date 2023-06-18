export class Random {
    /**
     * Make a random seed
     * @returns {number} A valid random seed
     */
    static makeSeed() {
        return Math.floor(Math.random() * 0x100000000);
    }

    /**
     * Construct a randomizer
     * @param {number} seed The seed, which must be a 32-bit unsigned integer
     */
    constructor(seed = Random.makeSeed()) {
        this.n = seed;
    }

    /**
     * Shuffle an array using this randomizer
     * @param {Array} array The array to shuffle
     * @returns {Array} The shuffled array
     */
    shuffle(array) {
        for (let index = array.length; index-- > 0;) {
            const randomIndex = Math.floor(this.float * (index + 1));

            [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
        }

        return array;
    }

    /**
     * Get a randomized integer in the range [0, 0xFFFFFFFF]
     * @returns {number} A random integer
     */
    get integer() {
        return this.n = 69069 * this.n + 1 >>> 0;
    }

    /**
     * Get a randomized number in the range [0, 1]
     * @returns {number} A random number
     */
    get float() {
        return this.integer / 0x100000000;
    }
}