# Debounced Search Hook

A lightweight, customizable React hook for implementing debounced search functionality with TypeScript support.

## Features

- Easy-to-use React hook
- Customizable debounce delay
- Typing indicator
- TypeScript support
- Lightweight with no external dependencies (other than React)

## Installation

Install the package using npm:

```bash
npm install debounced-search-hook
```

## Usage
Here's a basic example of how to use the useDebouncedSearch hook:

```bash
import React from 'react';
import { useDebouncedSearch } from 'debounced-search-hook';

const SearchComponent = () => {
  const handleSearch = (value) => {
    // Perform search operation
    console.log('Searching for:', value);
  };

  const { debouncedSearch, isTyping } = useDebouncedSearch(handleSearch, { delay: 200 });

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(e) => debouncedSearch(e.target.value)} 
      />
      {isTyping && <p>Typing...</p>}
    </div>
  );
};

export default SearchComponent;
```

## API

```bash
useDebouncedSearch(onSearch, options?)
```

## Parameters

- onSearch
- options

```bash
onSearch: (value: string) => void
```
A callback function that will be called with the search term after the debounce delay.

```bash
options: (optional) 
```
An object with the following properties:
- delay: number (default: 200)
- The debounce delay in milliseconds.

## Returns
An object with the following properties:

- debouncedSearch 
- isTyping

```bash
debouncedSearch: (value: string) => void
```
A function to be called with the current search term (typically in an input's onChange event).

```bash
isTyping: boolean
```
A boolean indicating whether the user is currently typing (i.e., whether we're waiting for the debounce to complete).

## TypeScript Support
This package includes TypeScript definitions. No additional types need to be installed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Changelog
### 1.0.0 
- Initial release of the debounced-search-hook package
- Implements basic debounced search functionality with TypeScript support


## License

[MIT](https://choosealicense.com/licenses/mit/)