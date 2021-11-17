export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start',
    padding: '30px 0'
  },

  text: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'flex-start'
  },

  scrollableArea: {
    overflowY: 'scroll',
    maxHeight: '300px',
    margin: '0 20px'
  },

  bottomInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 30px 0 20px'
  },

  likeCount: {
    fontWeight: '600'
  }
}
