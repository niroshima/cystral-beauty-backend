import ContactMessage from "../Models/contact.js";


//save contact messages
export async function createContactMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await ContactMessage.create({ name, email, message });
    return res.json({ message: "Message received. We'll get back to you soon." });
  } catch (err) {
    console.error("createContactMessage error:", err);
    return res.status(500).json({ message: "Failed to save message" });
  }
}

//Admin see messages
export async function getContactMessages(req, res) {
  if (!req.user) {
    return res.status(403).json({ message: "you need to login first" });
  }
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "you are not authorized to view messages" });
  }

  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return res.json(messages);
  } catch (err) {
    console.error("getContactMessages error:", err);
    return res.status(500).json({ message: "Failed to fetch messages" });
  }
}


//Admin only: mark a message as read

export async function markContactRead(req, res) {
  if (!req.user) {
    return res.status(403).json({ message: "you need to login first" });
  }
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "you are not authorized to update messages" });
  }

  try {
    const { id } = req.params;
    const updated = await ContactMessage.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Message not found" });
    return res.json(updated);
  } catch (err) {
    console.error("markContactRead error:", err);
    return res.status(500).json({ message: "Failed to update message" });
  }
}


//Admin delete message

export async function deleteContactMessage(req, res) {
  if (!req.user) {
    return res.status(403).json({ message: "you need to login first" });
  }
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "you are not authorized to delete messages" });
  }

  try {
    const { id } = req.params;
    const deleted = await ContactMessage.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Message not found" });
    return res.json({ message: "Message deleted" });
  } catch (err) {
    console.error("deleteContactMessage error:", err);
    return res.status(500).json({ message: "Failed to delete message" });
  }
}
