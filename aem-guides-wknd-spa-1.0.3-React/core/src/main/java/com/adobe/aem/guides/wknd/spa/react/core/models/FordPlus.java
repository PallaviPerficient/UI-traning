package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface FordPlus extends ComponentExporter  {
    public String getTitle();
    public String getText();
    public String getSelectionType();
    // public String getImagePath();
    public String getBGImagePath();
    public String getVideoUrl();
    public String getUrlType();
    // public String getVideoThumbnail();
    // public String getLink();
    public String getLinkText();
    public String getLinkTarget();
}