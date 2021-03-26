# Corgi Gang

Find Specific Corgi combinations before they drop by using the cryptocorgis.co API.

## Installation

```
git clone git@github.com:rkalis/corgi-gang.git
cd corgi-gang
yarn
```

## Usage

The default script searches for the next 11+ trait corgi starting at a specifc block number, and there is also an example function for a "full pumpkin" corgi. New searches can be added by updating the if-statements to the properties that you're looking for. When you're happy with your search run `node index.js` and the script will start searching. It prints the block numbers it is currently trying, and **stops** when it has found something (or when it has searched unsuccesfully for 10,000 blocks). So the final number in the terminal is the corgi you are looking for.

## Contributing

I won't implement any feature requests, but PRs are welcome for any feature that improve usage / customisability.
