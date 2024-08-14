export function success(res, data) {
  res.status(200).json({ success: true, data });
}

export function error(res, error) {
  res.status(400).json({ success: false, error: error.message });
}
