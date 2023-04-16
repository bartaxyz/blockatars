# Blockatars

| <img width="486" alt="Screenshot 2023-04-16 at 13 20 29" src="https://user-images.githubusercontent.com/4202010/232305939-82f0b28e-2fcf-48a0-a9c7-988dc1b33fb2.png"> |
| --- |

React library that generates unique visual hashes. Every small change in `seed` will generate a vastly different image.

Blockatars internally uses the same system for generating colors as [blockies](https://github.com/download13/blockies), this was done to preserve some visual compatibility between library that's already widely used. Though, the color distribution may be (and likely will be) different.

[Demo / Website](https://bartaxyz.github.io/blockatars/)

## Usage

Install the NPM package
```bash
npm install blockatars
```

Use the `Avatar` component in your code
```tsx
import { Avatar } from 'blockatar';

export const Component = () => {
  return (
    <Avatar
      seed="0x0......000" 
      size={24}
    />
  )
}
```

## Reference

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `seed` | ✓ | `string` | Any string to be used as a seed for the visual hashing |
| `size` | ✓ | `number` | Size of the SVG element in pixels |
| `disableLowerCase` | | `boolean` | Any value passed into the seed is lower-cased. This option disables that behaviour |
| `disableNoise` | | `boolean` | Disables the noise that's by default applied to the avatar |
| `disableBlur` | | `boolean` | Disables the blur that's by default applied to the avatar (⚠️ this generates a vastly different-looking avatar) |

## License

React Tree List is licensed under the MIT License.

## Authors

Ondřej Bárta · [GitHub](https://github.com/bartaxyz) · [website](https://www.ondrejbarta.xyz) · [twitter](https://twitter.com/bartaxyz)
