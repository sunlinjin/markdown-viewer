
md.commonmark = {
  defaults: {
    safe: false,
    smart: false,
    sourcepos: false
  },
  description: {
    safe: 'Raw HTML will not be rendered',
    smart: [
      'Straight quotes will be made curly',
      '-- will be changed to an en dash',
      '--- will be changed to an em dash',
      'and ... will be changed to ellipses'
    ].join('\n'),
    sourcepos: ''
  },
  compile: (markdown) => ((
    reader = new commonmark.Parser(),
    writer = new commonmark.HtmlRenderer(state.commonmark)
  ) =>
    writer.render(reader.parse(markdown))
  )()
}
