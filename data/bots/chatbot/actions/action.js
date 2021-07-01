  const axios = require('axios')

  /**
   * Pauses the current conversation in HITL
   * @category HITL
   */
  const pauseConversation = async (action = 'pause') => {
    const config = await bp.http.getAxiosConfigForBot(event.botId, { localUrl: true })
    const sessionId = await bp.dialog.createId(event)
    const { data } = await axios.post(`/mod/hitl/channel/${event.channel}/user/${event.target}/${action}`, {}, config)
  }

  return pauseConversation(args.action)