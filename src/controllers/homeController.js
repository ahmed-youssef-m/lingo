import { logHome as _logHome} from '../services/homeService.js';

export async function logHome(req, res) {
  try {
    const homeContent = await _logHome(req.body);
    res.send(homeContent);
    res.status(200);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
