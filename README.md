﻿# JavaScript Utility Package (@dhavaltank/js-utils)
A collection of functions i use regularly and don't want to write again
## Installation
Install my-project with npm
```bash
  npm install --save @dhavaltank/js-utils
  yarn add @dhavaltank/js-utils
```
### Utils Functions
#### `capitalizeFirstLetter(str)`
Capitalizes a string
@params str: string (required)
```typescript
import { capitalizeFirstLetter } from "@dhavaltank/js-utils";
capitalizeFirstLetter("hello world"); // 'Hello world'
```
#### `titleCase(str)`
title case a string (capital first latter of each word)
@params str: string (required)
```typescript
import { titleCase } from "@dhavaltank/js-utils";
titleCase("hello world"); // 'Hello World'
```
#### `getInitials(str)`
it will return initial latter of given word
@params str: string (required)
```typescript
import { getInitials } from "@dhavaltank/js-utils";
getInitials("hello"); // 'H'
getInitials("hello world"); // 'HW'
getInitials("hello world User"); // 'HU'
```
#### `addEllipsis(str)`
it will add ellipsis at the end of string
@params str: string (required)
@params length: number (required)
defualt: 10
```typescript
import { addEllipsis } from "@dhavaltank/js-utils";
addEllipsis("hello world User"); // 'HU'
```
## Authors
- [Dhaval Tank](https://www.github.com/dhavaltank01)
# Hi, I'm Dhaval Tank! 👋
## 🚀 About Me
I'm a MERN stack developer.
## License
[MIT](https://choosealicense.com/licenses/mit/)
## Contributing
Contributions are always welcome!
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
Please make sure to update tests as appropriate. 
