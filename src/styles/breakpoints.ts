interface Device {
  mobile: string
  tablet: string
  desktop: string
}

const size: Device = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
}

const buildQuery = (size: string) => `(min-width: ${size})`

export const device: Device = {
  mobile: buildQuery(size.mobile),
  tablet: buildQuery(size.tablet),
  desktop: buildQuery(size.desktop),
}
