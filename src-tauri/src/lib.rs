#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // NVIDIA / X11 対策の環境変数を最優先でセット
    std::env::set_var("WEBKIT_DISABLE_COMPOSITING_MODE", "1");
    std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");

    tauri::Builder::default()
        .setup(|_app| {
            println!("Launching independent dual windows (Standard Decorations Enabled)...");
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
