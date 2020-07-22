/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    let min = null,
      start = 1,
      end = n,
      mid = 0;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        min = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return min;
  };
};
