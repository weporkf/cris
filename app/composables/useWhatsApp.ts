// WhatsApp номер компании (замени на реальный номер в международном формате без +)
const WHATSAPP_NUMBER = '66937729232'

interface QuoteRequest {
  name: string
  phone: string
  email?: string
  service?: string
  message: string
  projectType?: string
}

export const useWhatsApp = () => {
  const whatsappNumber = WHATSAPP_NUMBER
  
  // Простая ссылка на WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  
  // Создание сообщения для заявки
  const createQuoteMessage = (data: QuoteRequest): string => {
    let message = `🏗️ *NEW QUOTE REQUEST*\n\n`
    message += `👤 *Name:* ${data.name}\n`
    message += `📱 *Phone:* ${data.phone}\n`
    
    if (data.email) {
      message += `📧 *Email:* ${data.email}\n`
    }
    
    if (data.service) {
      message += `🔧 *Service:* ${data.service}\n`
    }
    
    if (data.projectType) {
      message += `🏠 *Project Type:* ${data.projectType}\n`
    }
    
    message += `\n💬 *Message:*\n${data.message}`
    
    return message
  }
  
  // Отправка заявки через WhatsApp
  const sendQuoteRequest = (data: QuoteRequest) => {
    const message = createQuoteMessage(data)
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Открываем WhatsApp в новой вкладке
    window.open(url, '_blank')
    
    return true
  }
  
  // Быстрое сообщение
  const sendQuickMessage = (text: string) => {
    const encodedMessage = encodeURIComponent(text)
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(url, '_blank')
  }
  
  return {
    whatsappNumber,
    whatsappLink,
    sendQuoteRequest,
    sendQuickMessage,
    createQuoteMessage,
  }
}

