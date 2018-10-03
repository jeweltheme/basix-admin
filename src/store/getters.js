const config = state => state.app.config
const isLoading = state => state.app.isLoading
const palette = state => state.app.config.palette

export {
  isLoading,
  palette,
  config
}
